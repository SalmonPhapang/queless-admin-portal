<template>
  <v-data-table
    :headers="headers"
    :items="clients"
    sort-by="name"
    class="elevation-3"
  >
    <template v-slot:top>
      <v-toolbar
        flat>
        <v-toolbar-title>Client Management</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="800px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
             Add New
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle() }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedClient.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedClient.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedClient.enterpriseNumber"
                      label="Registration Number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedClient.contactNumber"
                      label="Contact Number"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <span class="headline">Address Details</span>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedAddress.nickName"
                      label="Nick Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedAddress.houseNumber"
                      label="house number/unit number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedAddress.addressLine"
                      label="Address Line"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedAddress.streetName"
                      label="Street Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedAddress.suburb"
                      label="Suburb"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedAddress.city"
                      label="City"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedAddress.province"
                      label="Province"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close">
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
<!--    <template v-slot:item.="{ item }">-->
<!--      <div class="p-2">-->
<!--        <v-img :src="item.image" :alt="item.name" height="100px"></v-img>-->
<!--      </div>-->
<!--    </template>-->
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <p >No data available</p>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import ClientService from "@/components/client/client.service";
import {Client, IClient} from "@/model/client.model";
import {IAddress, Address} from "@/model/address.model";

@Component({
  components: {
    HelloWorld,
  },
})
export default class ClientComponent extends Vue {
  @Inject('clientService')
  private clientService!: () => ClientService;
  public clients: IClient[] = [];
  public client: IClient = new Client();
  public editedClient: IClient = new Client();
  public defaultClient: IClient = new Client();

  public editedAddress: IAddress = new Address();
  public defaultAddress: IAddress = new Address();


  headers: Array<any> = [
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Email', value: 'email' },
    { text: 'Contact', value: 'contactNumber'},
    { text: 'Registration Number', value: 'enterpriseNumber'},
    { text: 'Profile', value: 'profileImage'}];

  dialog = false;
  dialogDelete = false;
  editedIndex = -1;

  //mounted (): void {}

  created (): void {
    // this.clientService().findAll()
    //   .then(response =>{
    //     //log response
    //     this.clients = response;
    //   })
  }

  formTitle (): string {
    return this.editedIndex == -1 ? 'New Client' : 'Edit Client'
  }

  public save(): void {
    //this.clientService().save(null);
  }

  public update(): void {
    // this.clientService().update(null);
  }

  public remove(): void {
    this.clientService();
  }
  public close(): void {
    this.dialog = false
    this.$nextTick(() => {
      this.editedClient = Object.assign({}, this.defaultClient)
      this.editedAddress = Object.assign({}, this.defaultAddress)
      this.editedIndex = -1
    })
  }
  closeDelete () {
    this.dialogDelete = false
    // this.$nextTick(() => {
    //   this.editedClient = Object.assign({}, this.defaultClient)
    //   this.editedIndex = -1
    // })
  }

  editItem (item: IClient) {
    this.editedIndex = this.clients.indexOf(item);
    this.editedClient = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem (item: IClient) {
    this.editedIndex = this.clients.indexOf(item)
    this.editedClient = Object.assign({}, item)
    this.dialogDelete = true
  }

  deleteItemConfirm () {
    this.clients.splice(this.editedIndex, 1)
    this.closeDelete()
  }
}
</script>
