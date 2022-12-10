import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import styles from '../module/Detail.module.css'
import { Table } from 'antd';


const DetailCard = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(undefined);
  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDentist((data))
      })
  }, [id])

  return (
    <div className={`${darkMode ? styles.darkDetails : styles.whiteTable}`}>
      <h1>About the dentist {dentist?.name} </h1>
      {
        dentist ?
          <section >
          <div className= {`${styles.containerDetail}`}>
              <div className= {`${styles.containerDetail}`}>
                <img className={`${styles.containerDetail}`} src="/images/doctor.jpg" alt="imagenCard" />
              </div>
              <div className= {`${styles.containerTable}`}>
              <Table dataSource={[dentist]}>
              <Table.Column className={`${styles.darkTable} ${styles.whiteTable}`} title="Name" dataIndex="name"/>
              <Table.Column className={`${styles.darkTable}`} title="Phone" dataIndex="phone" />
              <Table.Column className={`${styles.darkTable}`} title="Website" dataIndex="website" />
              <Table.Column className={`${styles.darkTable}`} title="Email" dataIndex="email" />
              </Table>
              </div>
            </div>
          </section>
          : null
      }
    </div>
  )
}

export default DetailCard;

//Listo hasta aca