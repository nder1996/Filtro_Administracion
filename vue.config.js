module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions:{
        productName: 'Administrador',
        // asar: false,
        win:{
          icon: "./public/icono.png"
        },
        directories:{
          buildResources: "public"
        }
      },
      nsis: {
        deleteAppDataOnUninstall: true
      },
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      nativeWindowOpen: true,
      
    },
    
  },
  
}
