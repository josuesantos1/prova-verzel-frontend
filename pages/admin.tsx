import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button, Form, Input } from '../components/form'
import { Box, Card, GridView, Section } from '../components/layout'

import Modal from 'react-modal';
import axios from 'axios'

const Admin: NextPage = () => { 

  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  let subtitle: any;

  const [modalIsOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [price, setPrice] = useState(Number)
  const [photo, setPhoto] = useState('')

  const [cars, setCars] = useState([])

  const changeName = (e: any) => {
    setName(e.target.value)
  }

  const changeBrand = (e: any) => {
    setBrand(e.target.value)
  }

  const changeModel = (e: any) => {
    setModel(e.target.value)
  }

  const changePhoto = (e: any) => {
    setPhoto(e.target.value)
  }

  const changePrice = (e: any) => {
    let price = e.target.value
    setPrice(price)
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleViewCars = useEffect(() => {
      axios.get('http://localhost:8080/cars/pagination', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(response => {
        setCars(response.data)
      }).catch(error => {
        console.log(error)
      })
    }, [])

  const handlerCreate = () => {
    axios.post('http://localhost:8080/cars', {
      name: name,
      brand: brand,
      model: model,
      price: price,
      photo: photo
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(response => {     
      closeModal()

      axios.get('http://localhost:8080/cars/me', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(response => {
        setCars(response.data)
      }).catch(error => {
        console.log(error)
      })
    }).catch(error => {
      console.log(error)
    });
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      color: '#76f',
    },
  };

  return (
    <>
      <Head>
        <title>DevCar - admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Box justifyContent='space-between'>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>New Car</h2>
          <Button onClick={closeModal}>X</Button>
        </Box>
        <Form>
          <Input type='text' placeholder='Name' onChange={changeName} />
          <Input type='text' placeholder='Brand' onChange={changeBrand} />
          <Input type='text' placeholder='Model' onChange={changeModel} />
          <Input type='text' placeholder='Price' onChange={changePrice} />
          <Input type='file' accept="image/png, image/jpeg" onChange={changePhoto}/>
        </Form>
        <Box justifyContent='space-between'>
          <Button onClick={handlerCreate}>Save</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Box>
      </Modal>

      <Section>
        <Box 
          height="20vh"
          width="50vw"
          justifyContent='space-between'>
            <Button onClick={openModal}>
              new car
            </Button>
        </Box>
      <GridView>
        {cars.map((car: any) => {
          return (
            <Card key="car">
              <Image src="https://picsum.photos/200/300?random=1" alt="car" width={300} height={300} />
              <h1>{car.name}</h1>
              <p>
                {car.brand} - {car.model}
              </p>
              <h3>{car.description}</h3>
              <strong>
                R$ 160.000,00
              </strong>
            </Card>
          )
        })}
        </GridView>
      </Section>
    </>
  )
}

export default Admin
