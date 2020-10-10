import { birdsData } from '../../public/birdbase';

export default class DummyBirdService {
  getBird = async (step, id) => {
    return birdsData[step].find(({ id: itemId }) => itemId === id);
  };

  getAllBird = async (step) => {
    return birdsData[step];
  };
}
