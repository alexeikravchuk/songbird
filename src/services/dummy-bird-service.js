import birdsData from '../../public/birds';

export default class DummyBirdService {
  getBird = async (step, id) => {
    return birdsData[step][id];
  };

  getAllBird = async (step) => {
    return birdsData[step];
  };
}
