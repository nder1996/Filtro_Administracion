<template>
    <v-container fluid>
        <v-card class="mx-auto">
            <v-card-title class="text-h6 font-weight-regular justify-space-between">
                <span>{{ currentTitle }}</span>
                <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
            </v-card-title>
            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-col style='margin: auto;' cols="6">
                                <v-select  :items="items" label="Escoge Una Tabla" dense outlined></v-select> <br>
                    </v-col>
                </v-window-item>
                <v-window-item class='step_tabla' :value="2">
                    <CrudClientes :adminVerification="false" :idHoja="0"></CrudClientes>
                </v-window-item>
                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                        <h1>Has Terminado de Filtrar</h1>
                    </div>
                </v-window-item>
            </v-window>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn :disabled="step === 1" text @click="step--">
                    Anterior
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
                    Siguiente
                </v-btn>
            </v-card-actions>
        </v-card>
        <!---->
        <!---->
        <!--
       
    -->
    </v-container>
</template>
<script>
import CrudClientes from "../components/CrudClientes.vue"

export default {
    data: () => ({
        step: 1,
         items: ['Clientes', 'Tabla_2', 'Tabla_3', 'Tabla_4'],

    }),



    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return 'Escoge Una Tabla'
                case 2:
                    return 'Filtra Los Datos de La Tabla'
                default:
                    return 'Operacion Realizada'
            }
        },
    },

    components: {
        CrudClientes,

    },

}
</script>
<style scoped>
.Hoja-Cliente {
    width: 90%;
    margin-left: 110px;
}

.step_tabla {
    border: 5px solid red;
    width: 100%;
}
</style>