import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Event } from './event.model';
import { EventsServices } from "./events.services";






@Controller('event')
export class EventController {
    constructor(private eventsServices :EventsServices){

    }

    @Get()
    async getAll(): Promise<Event[]> {
        return this.eventsServices.getAll();
    }
    @Get(':id')
    async getOne(@Param() params): Promise<Event> {
        return this.eventsServices.getOne(params.id);
    }
    @Post()
    async createEvent(@Body() event:Event) {
        this.eventsServices.createEvent(event);
    }
    @Put()
    async updateEvent(@Body() event:Event):Promise<[number, Event[]]>{
        return this.eventsServices.updateEvent(event);
    }
    @Delete(':id')
    async deleteEvent(@Param() params) {
        this.eventsServices.deleteOne(params.id);
    }
}