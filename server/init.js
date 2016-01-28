Meteor.startup(function () {
      //adicionar as categorias na inicialização
      if (Categorias.find().count() === 0 ) {
          Categorias.insert({nome: 'Proteção Solar'});
          Categorias.insert({nome: 'Rosto'});
          Categorias.insert({nome: 'Maquiagem'});
          Categorias.insert({nome: 'Corpo'});
          Categorias.insert({nome: 'Cabelos'});
          Categorias.insert({nome: 'Desodorante'});
          Categorias.insert({nome: 'Perfumaria'});
          Categorias.insert({nome: 'Homem'});
          Categorias.insert({nome: 'Teem'});
          Categorias.insert({nome: 'Sensual'});
          Categorias.insert({nome: 'Empório'});
          Categorias.insert({nome: 'Bem-estar'});
      }
});
