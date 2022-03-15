import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button, Form, Input } from '../components/form'
import { Box, Card, CardAdmin, GridView, Section } from '../components/layout'

import Modal from 'react-modal';
import axios from 'axios'
import { Alert } from '../components/alert'
import { createCar, deleteCar, getMe } from '../api/admin'

const Admin: NextPage = () => { 

  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  let subtitle: any;

  const [modalIsOpen, setIsOpen] = useState(false)
  // const [deleteCar, setDeleteCar] = useState(false)
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')
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

  useEffect(() => {
    getMe().then(({ data }) => {
      setCars(data)
    }).catch(err => console.log(err))
  }, [])

  const handlerCreate = () => {
    createCar(name, brand, model, price, photo).then(({ data }) => {
      getMe().then(({ data }) => {
        setCars(data)
        closeModal()
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }

  const handlerDelete = (id: string) => {
    deleteCar(id).then(()  => {
      getMe().then(({ data }) => {
        setCars(data)
      }).catch(err => console.log(err))
    }).catch((err: any) => console.log(err))
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

      {/* <Alert open={false}/> */}

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
            <CardAdmin key="car">
              <Box justifyContent='end'>
                <Button onClick={() => handlerDelete(car.id)}>
                  x
                </Button>
                <Button onClick={() => handlerDelete(car.id)}>
                  editar
                </Button>
              </Box>
              <Image src={car.photo} alt="car" width={300} height={300} />
              <h1>{car.name}</h1>
              <p>
                {car.brand} - {car.model}
              </p>
              <h3>{car.description}</h3>
              <strong>
                R$ {car.price}
              </strong>
            </CardAdmin>
          )
        })}
        </GridView>
      </Section>
    </>
  )
}

export default Admin
