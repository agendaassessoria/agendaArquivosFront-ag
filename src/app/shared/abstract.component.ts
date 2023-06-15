import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseModel } from "../models/base.model";
import { AbstractService } from "../services/abstract.service";
import { BaseComponent } from "./base-component";

@Component({
    template: ''
  })

export class AbstractComponent<T extends BaseModel> extends BaseComponent implements OnInit{

    item: T;

    public endPoint: string
    public title: String

    constructor(
        public service: AbstractService<T>,
        public activatedRoute: ActivatedRoute,
        public router: Router
    ){super()}


    ngOnInit(){
        this.activatedRoute.data.subscribe((data) => {
            console.log('Datas Datas:', data)
            this.endPoint = data.endPoint
            this.title = data.title
        } )
    }

    voltar() {
        console.log(this.endPoint)
        this.router.navigate(['pages/accounts']);
      }


      


}