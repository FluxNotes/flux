import { fromJS } from 'immutable';

const mentions = fromJS([
  {
    name: 'staging',
    placeholder: 'Stage:_, T:_ N:_ M:_',
  },
  {
    name: 'HER2',
    placeholder: 'HER2 Status: _',
  },
  {
    name: 'ER',
    placeholder: 'Estrogen Receptor Status: _',
  },
  {
    name: 'PR',
    placeholder: 'Progesterone Status: _',
  }
]);

export default mentions;