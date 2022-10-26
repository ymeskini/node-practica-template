import dockerCompose from 'docker-compose';

export default async () => {
  dockerCompose.down();
};
