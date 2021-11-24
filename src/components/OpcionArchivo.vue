<template>
    <v-container>
        <v-row class='mt-5 d-flex justify-center' cols='12'>
            <v-col cols='6'>
                <v-textarea type='text' v-model='columns' @keyup.enter='Agregar_Column' class="mx-2" placeholder="Ingrese Un Nombre" rows="1" prepend-icon="mdi-clipboard-plus" height='25'></v-textarea>
            </v-col>
            <v-col cols='2'>
                <v-btn style='font-size: 12px;' @click='Agregar_Column' rounded color="primary" width="150" dark>
                    Agregar Columna
                </v-btn>
            </v-col>
        </v-row><br>
        <v-row class='datos_table d-flex justify-center mt-3'>
            <div class='scroll_data'>
                <v-simple-table class='scroll_tabla' style='border:1px solid grey;'>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center text-uppercase">
                                    <strong>Index</strong>
                                </th>
                                <th class="text-center text-uppercase">
                                    <strong> Nombre de la columna</strong>
                                </th>
                                <th class="text-center text-uppercase">
                                    <strong>Numero de Caracteres</strong>
                                </th>
                                <th class="text-center text-uppercase">
                                    <strong>Tipo de dato</strong>
                                </th>
                                <th class="text-center text-uppercase">
                                    <strong>ACCIONES</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,indice) in column">
                                <td>
                                    {{indice}}
                                </td>
                                <td>
                                    {{ item.name }}
                                </td>
                                <td class="input_num">
                                    <input placeholder="128" type="number">
                                </td>
                                <td>
                                    <select name="select">
                                        <option value="value1">Entero</option>
                                        <option value="value2" selected>Carater</option>
                                        <option value="value3">Fecha</option>
                                    </select>
                                </td>
                                <td>
                                    <v-icon color='#4CAF50'>
                                        mdi-check-circle
                                    </v-icon>&nbsp;&nbsp;
                                    <v-icon color='#F44336'>
                                        mdi-trash-can
                                    </v-icon>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
            <!--
            <v-simple-table style='border:1px solid grey;'>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center text-uppercase">
                                <strong>Index</strong>
                            </th>
                            <th class="text-center text-uppercase">
                                <strong> Nombre de la columna</strong>
                            </th>
                            <th class="text-center text-uppercase">
                                <strong>Numero de Caracteres</strong>
                            </th>
                            <th class="text-center text-uppercase">
                                <strong>Tipo de dato</strong>
                            </th>
                            <th class="text-center text-uppercase">
                                <strong>ACCIONES</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,indice) in column">
                            <td>
                                {{indice}}
                            </td>
                            <td>
                                {{ item.name }}
                            </td>
                            <td class="input_num">
                                <input placeholder="128" type="number">
                            </td>
                            <td>
                                <select name="select">
                                    <option value="value1">Entero</option>
                                    <option value="value2" selected>Carater</option>
                                    <option value="value3">Fecha</option>
                                </select>
                            </td>
                            <td>
                                <v-icon color='#4CAF50'>
                                    mdi-check-circle
                                </v-icon>&nbsp;&nbsp;
                                <v-icon color='#F44336'>
                                    mdi-trash-can
                                </v-icon>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            -->
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            item: 0,
            indice: 0,
            column: [{
                    name: 'NOMBRE',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'NÚMERO DE SOCIO',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'NÚMERO DE SOCIO',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'APELLIDO 1',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'APELLIDO 2',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'PARENTESCO',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'DNI/PASAPORTE',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'PD',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'FECHA DE NACIMIENTO',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'FECHA DE NACIMIENTO(HEBREO)',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'FECHA DE CASAMIENTO',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'FECHA DE CASAMIENTO(HEBREO)',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'FECHA DE DEFUNCIÓN(HEBREO)',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'DIRECCIÓN',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'CÓDIGO POSTAL',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'LOCALIDAD',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'PROVINCIA',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'MÓVIL',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'FIJO',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'EMAIL',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'EDAD',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'SOLA',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'MAYOR',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'TEFILÁ',
                    num: '50',
                    tipo: ''
                },
                /**/

                {
                    name: 'OBSERVACIONES',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'CUOTAS',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'CUOTA LICEO',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'FORMA DE PAGO',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'OBSERVACIONES 2',
                    num: '50',
                    tipo: ''
                },
                {
                    name: 'JESED',
                    num: '50',
                    tipo: ''
                },

                {
                    name: 'ID',
                    num: '50',
                    tipo: ''
                },








            ],
            columns: ''
        }
    },

    methods: {
        Agregar_Column() {
            this.column.push({
                name: this.columns
            });
            this.columns = '';
        }
    }
}
</script>
<style scoped>
.datos_table {
    /* border: 5px solid red;*/
}

.datos_table div {
    margin-left: 5%;
}

#table_2 {
    /* border: 5px solid greenyellow;*/
    width: 10%;
}

#table_2 input {
    border: 5px solid black;
    width: 50%;
    outline: none;
    border: none;
    text-decoration: none;
}

.info_table {
    /*border: 5px solid black;*/
}

.tabla {
    border: 5px solid black;
    width: 100%;
}

.table_num input {
    /* border: 5px solid red;*/
    width: 28%;
}

.input_num input {
    outline: none;
    /* border: 5px solid red;*/
    width: 38%;
    text-decoration: none;
}

.scroll_data {
    position: relative;
    right: 2%;
   /* border: 5px solid purple !important;*/
    height: 600px;
    width: 1900px !important;
    overflow: scroll;
}

.scroll_tabla{
    position: relative;
    right: 5%;
    /*border: 5px solid black !important;*/
    width: 1200px !important;
    height: 100%;
}

</style>