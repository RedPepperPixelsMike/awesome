import {NgModule} from "@angular/core";
import {MessagesComponent} from "./messages.component";
import {MessageInputComponent} from "./message-input.component";
import {MessageListComponent} from "./message-list.component";
import {MessageComponent} from "./message.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class MessageModule {

}