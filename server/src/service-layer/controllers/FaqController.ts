import { Faq } from "data-layer/models/Faq";
import { FaqDataService } from "data-layer/services/FaqDataService";
import { Controller, Get, Route } from "tsoa";

@Route("faq")
export class FaqController extends Controller {
    @Get()
    public async getFaqs(): Promise<Faq[]> {
        const faqs = FaqDataService.getAllFaqs()
        return faqs
    }

}