<template>
    <div class="botones">
        <div class="editar">
            <v-btn append-icon="$vuetify">
                Editar Historia
            </v-btn>
        </div>
        <div class="crear">
            <v-btn append-icon="$vuetify">
                Crear Historia
            </v-btn>
        </div>
    </div>
</template>
        

<style setup>
    .editar{
        display: flex;
        padding: 1rem;
    }

    .crear{
        display: flex;
        padding: 1rem;
    }
</style>