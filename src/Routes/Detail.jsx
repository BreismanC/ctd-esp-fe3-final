import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
//import styles from './module/DetailCard.module.css';
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
    <>
      <h1>About the dentist {dentist?.name} </h1>
      {
        dentist ?
          <section >
          <div className= "col-sm-12 col-lg-6 container">
              <div className="">
                <img className="card-img-top" src="/images/doctor.jpg" alt="imagenCard" />
              </div>
              <Table dataSource={[dentist]}>
              <Table.Column title="Name" dataIndex="name" />
              <Table.Column title="Phone" dataIndex="phone" />
              <Table.Column title="Website" dataIndex="website" />
              <Table.Column title="Email" dataIndex="email" />
              </Table>
            </div>
          </section>
          : null
      }
    </>
  )
}

export default DetailCard;

//Listo hasta aca