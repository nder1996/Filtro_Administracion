<template>
    <v-card class="mx-auto" color='#FAFAFA' width="950">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
            <strong> <span>{{ currentTitle }}</span></strong>
            <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
        </v-card-title>
        <v-window v-model="step">
            <v-window-item :value="1">
                <v-card-text>
                    <v-text-field label='Nombre de la Nueva Tabla' required></v-text-field>
                </v-card-text>
            </v-window-item>
            <v-window-item :value="2">
                <v-card-text>
                    <op_archivo></op_archivo>
                </v-card-text>
            </v-window-item>
            <v-window-item :value="3">
                <div class="pa-4 text-center">
                
                        <v-icon style='font-size: 12vw;' color='success'>
                            mdi-check-circle
                        </v-icon>
                 
                    <h3>NUEVA TABLA CREADA</h3>
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
</template>
<script>
import op_archivo from "../components/OpcionArchivo.vue";
export default {
    components: {
        op_archivo
    },
    data: () => ({
        step: 1,
    }),



    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return 'Agrega Una Nueva Tabla'
                case 2:
                    return 'Agregue Los Cambios Correspondientes'
                default:
                    return 'Operación Realizada'
            }
        },
    },
}
</script>