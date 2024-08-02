
import HomeCard from './HomeCard';
const meta = {
  component: HomeCard,
};

export default meta;

export const Default = {
  args : {
    pid: '1',
    name: 'Sample Product',
    price: {
      small: 100,
      medium: 150,
      large: 200,
    }
  }
};
export const coloredOne = {
  args : {
    pid: '1',
    name: 'Sample Product',
    src: 'https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?rs=1&pid=ImgDetMain',
    price: {
    small: 100,
      medium: 150,
      large: 200,
    }},
argTypes: {
  backgroundColor: { control: 'color' }
}
}

;