import React from 'react';
import reactCSS from 'reactcss';


const TetrisCell = (props) => {
  const styles = reactCSS({
    default: {
      cell: {
        backgroundColor: 'beige',
        width: '100%',
        height: '100%',
      },
    },
    occupied: {
      cell: {
        backgroundColor: 'lightgray',
      },
    },
    current: {
      cell: {
        backgroundColor: 'tomato',
      },
    }
  }, props);

  return (
    <div style={styles.cell} />
  );
};

export default TetrisCell;