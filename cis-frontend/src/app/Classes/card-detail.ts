import { Categories } from "./categories";

export class CardDetail {
    cardId:bigint;
    cardType:String;
    name:String;
    companyName:String;
    designation:String;
    department:String;
    residentialNumber:bigint;
    mobileNumber:bigint;
    emaiId:String;
    fax:bigint;
    officeEmailId:String;
    address:String;
    officeWebSite:String;
    branches:String;
    partner:String;
    categories:Categories;
}
