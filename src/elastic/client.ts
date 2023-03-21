import { Client } from '@elastic/elasticsearch';

const elasticClient = new Client({
  node: 'http://localhost:9200/',
  auth: {
    username: 'elastic',
    password: 'changeme',
  },
});

export default elasticClient;
