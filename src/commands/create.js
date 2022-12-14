module.exports = {
  name: 'create',
  description: 'alo vc',
  run: async (toolbox) => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    if(!parameters.first){
      error("Escreva o nome do seu components");
      return
    }


    await template.generate({
      template: 'components.js.ejs',
      target: `src/components/${parameters.first}/index.tsx`,
      props: {name: parameters.first},

    })

    await template.generate({
      template: 'style.js.ejs',
      target: `src/components/${parameters.first}/style.ts`,
      props: {name: parameters.first},

    })
    success(`Generated ${parameters.first}`)
  },
}
