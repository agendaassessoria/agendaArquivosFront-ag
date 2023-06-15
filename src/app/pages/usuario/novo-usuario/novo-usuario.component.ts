import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ResponseModel } from '../../../models/response.model';
import { Role } from '../../../models/role.model';
import { UsuarioModel } from '../../../models/usuario.model';
import { AbstractComponent } from '../../../shared/abstract.component';
import { UserDetails } from '../../authentication/models/user-details.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})

export class NovoUsuarioComponent extends AbstractComponent<UsuarioModel>{

  item: UsuarioModel
  form: FormGroup
  title: string = 'Novo Usuário'
  roles = Role
  unsubscribe: Subject<void> = new Subject<void>();
  isNew: boolean = true
  public submitted
  public endPoint: string


  constructor(
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public messageService: MessageService,
    private usuarioService: UsuarioService,
    public router: Router
  ) { super(usuarioService, activatedRoute, router) }

  ngOnInit() {
    this.createForm()
    this.activatedRoute.params.subscribe(param => {
      console.log('Param.id:', param)
     this.excludeControlPassword()
      this.visualizarFormulario()
      if(param.id != undefined){
        this.usuarioService.getById(param.id).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
          console.log('res do View:',res)
          this.item = Object.assign(new UsuarioModel(), res);
          this.form.patchValue(this.item)
        })
      }
    })
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [this.item?.name, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*')]],
      email: [this.item?.email,[Validators.required]],
      role: [this.item?.role,[Validators.required]],
      password: [this.item?.password, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [this.item?.confirmPassword, [Validators.required]]

    })
  }

  salvar(){
    this.item = Object.assign(new UsuarioModel(), this.form.value)
    if(this.item.id == undefined){
      this.usuarioService.create(this.item).pipe(takeUntil(this.unsubscribe)).subscribe( response => {

        const res: ResponseModel = response as unknown as ResponseModel;
      /*  if(res){
          this.messageService.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
        }*/

      })

    }
    
  }
  excludeControlPassword() {
    this.activatedRoute.url.subscribe(parametro => {
      console.log(parametro[0].path)
      if (parametro[0].path != 'new') {
        this.form.removeControl('password')
        this.form.removeControl('confirmPassword')
        this.isNew = false;

      }
    });
  }

  visualizarFormulario() {
    this.activatedRoute.url.subscribe((parametro) => {
      parametro.forEach((param) => {
        if (param.path == 'view') {
          this.form.disable();
          return;
        }
      });      
    });
  }
 

  voltar() {
    console.log(this.endPoint)
    this.router.navigate(['pages/usuario']);
  }

}
