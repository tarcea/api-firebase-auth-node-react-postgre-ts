import { Client } from '@elastic/elasticsearch';

const client: Client = new Client({
  node: 'http://localhost:9200/',
  auth: {
    username: 'elastic',
    password: 'changeme',
  },
});

const prepare = async () => {
  const exists = await client.indices.exists({ index: 'test-index' });

  if (exists)
    return await client.indices.create({
      index: 'test-index',
      body: {
        mappings: {
          dynamic: 'strict',
          properties: {
            email: { type: 'text' },
          },
        },
      },
    });
};

prepare().catch((err) => {
  console.log(err);
  process.exit(1);
});
