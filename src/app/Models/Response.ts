import { HttpStatusCode } from "@angular/common/http";

export interface Response<T>{
    Dados: T;
    Mensagem: string;
    HttpStatusCode: HttpStatusCode
}