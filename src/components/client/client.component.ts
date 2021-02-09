import Component from 'vue-class-component'
import ClientService from './client.service'
import { Vue, Inject } from 'vue-property-decorator';
import {Client, IClient} from "../../model/client.model";

@Component
export default class ClientComponent extends Vue {
  @Inject('clientService')
  private clientService!: () => ClientService;
  // public clients: IClient[] = [];
  // public client: IClient = new Client();
  // public editedClient: IClient = new Client();
  // public defaultClient: IClient = new Client();
  // public headers: [
  //   {
  //     text: 'Name',
  //     align: 'start',
  //     sortable: false,
  //     value: 'name',
  //   },
  //   { text: 'UserName', value: 'userName' },
  //   { text: 'Email', value: 'email' },
  //   { text: 'Contact Number', value: 'contactNumber' },
  //   { text: 'Enterprise Number', value: 'enterpriseNumber' },
  // ];
  // dialog: boolean = false;
  // dialogDelete: boolean = false;
  // editedIndex: number = -1;
  //
  // mounted (): void {}
  //
  // created (): void {
  //   // this.clientService().findAll()
  //   //   .then(response =>{
  //   //     //log response
  //   //     this.clients = response;
  //   //   })
  // }
  //
  // public save(): void {
  //   this.clientService().save(null);
  // }
  //
  // public update(): void {
  //   this.clientService().update(null);
  // }
  //
  // public remove(): void {
  //   this.clientService();
  // }
  // public close(): void {
  //   this.clientService();
  // }
  // closeDelete () {
  //   this.dialogDelete = false
  //   // this.$nextTick(() => {
  //   //   this.editedClient = Object.assign({}, this.defaultClient)
  //   //   this.editedIndex = -1
  //   // })
  // };
  //
  // editItem (item) {
  //   this.editedIndex = this.clients.indexOf(item);
  //   this.editedClient = Object.assign({}, item);
  //   this.dialog = true;
  // };
  //
  // deleteItem (item) {
  //   this.editedIndex = this.clients.indexOf(item)
  //   this.editedClient = Object.assign({}, item)
  //   this.dialogDelete = true
  // };
  //
  // deleteItemConfirm () {
  //   this.clients.splice(this.editedIndex, 1)
  //   this.closeDelete()
  // };

}
