import { Faq } from "data-layer/models/Faq";
import { FaqDataService } from "data-layer/services/FaqDataService";
import { Body, Controller, Get, Post, Route } from "tsoa";

@Route("faq")
export class FaqController extends Controller {
    @Get()
    public async getFaqs(): Promise<Faq[]> {
        const faqs = FaqDataService.getAllFaqs()
        return faqs
    }

    @Post()
    public async createFaq(@Body() faq: Faq): Promise<void> {
        await FaqDataService.createFaq(faq)
    }

}