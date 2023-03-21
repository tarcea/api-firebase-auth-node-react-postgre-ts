import { Client } from '@elastic/elasticsearch';

const client: Client = new Client({
  node: 'http://localhost:9200/',
  auth: {
    username: 'elastic',
    password: 'changeme',
  },
});

const run = async () => {
  const response = await client.index({
    index: 'test-index',
    id: '1',
    refresh: true,
    body: {
      email: 'sase@sapte.opt',
    },
  });
  console.log(response);

  const response2 = await client.search({
    index: 'books',
  });

  console.log(response2);
};

run().catch((err) => {
  console.log(err);
  process.exit(1);
});
