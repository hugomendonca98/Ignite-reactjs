import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 12000,
          createdAt: new Date('2022-06-29 09:47:12')
        },
        {
          id: 2,
          title: 'Aluguel de apartamento',
          type: 'withdraw',
          category: 'Casa',
          amount: 1110,
          createdAt: new Date('2022-07-02 12:47:12')
        }
      ],
    })
  },
  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=> {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request)=> {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
