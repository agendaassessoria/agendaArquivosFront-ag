import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { BaseModel } from "../models/base.model";
import { AbstractService } from "../services/abstract.service";
import { BaseComponent } from "./base-component";


@Component({
    template: ''
})

export class AbstractListComponent<T extends BaseModel> extends BaseComponent implements OnInit {
    private endPoint: String;
    public title: String;
    data: any
    public totalRecords: number
    
    constructor (
        protected service: AbstractService<T>,
        protected router: Router,
        public activatedRoute?: ActivatedRoute
    ){ 
        super()
    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.endPoint = data.endPoint
            this.title = data.title
        })
    }

    loadFromServer(event: LazyLoadEvent){
        this.service.getAll().subscribe(res => {
          this.data = res
          this.totalRecords = res.length
          console.log(this.data)
        })
      }
      editar(id: number): void {
        this.router.navigate(['pages/' + this.endPoint + '/edit', id]);
      }


}