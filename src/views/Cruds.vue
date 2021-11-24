<template>
    <v-container class="Marco " fluid>
        <v-card class="mx-auto">
            <v-card-title class="text-h6 font-weight-regular justify-space-between">
                <span>{{ currentTitle }}</span>
                <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
            </v-card-title>
            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                        <v-col style='margin: auto;' cols="6">
                            <v-select :items="items" label="Escoge Una Tabla" dense outlined></v-select> <br>
                        </v-col>
                    </v-card-text>
                </v-window-item>
                <v-window-item :value="2">
                    <component :is="select.crud" :adminVerification="true" :idHoja="select.idHoja"></component>
                </v-window-item>
                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                        <v-img class="mb-4" contain height="128" src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img>
                        <h3 class="text-h6 font-weight-light mb-2">
                            Welcome to Vuetify
                        </h3>
                        <span class="text-caption grey--text">Thanks for signing up!</span>
                    </div>
                </v-window-item>
            </v-window>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn :disabled="step === 1" text @click="step--">
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
                    Next
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
import axios from 'axios'
import CrudClientes from "../components/CrudClientes.vue"
export default {
    components: {
        'CrudClientes': CrudClientes,

    },
    data() {
        /*  step: 1,*/

        return {
            step: 1,
            select: { hoja: 'Clientes', idHoja: '0', crud: 'CrudClientes' },
               items: ['Clientes', 'Tabla_2', 'Tabla_3', 'Tabla_4'],
            hojas: [
                { hoja: 'Clientes', idHoja: '0', crud: 'CrudClientes' },
                { hoja: 'Personal', idHoja: '1', crud: 'CrudPersonal' },
            ],

        }
    },

    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return 'Escoge Una Tabla'
                case 2:
                    return 'Modifica Los Datos De La Tabla'
                default:
                    return 'Has Modificado La Tabla'
            }
        },
    },
    mounted() {},
    methods: {

    },
}
</script>
<style scoped>
.Marco {
    /*border:5px solid black;*/
    padding: 5px;
    width: 95%;
}

.primary {
    text-align: center;
}
</style>