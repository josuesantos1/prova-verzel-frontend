import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { All } from '../api/cars'
import { Button, Search } from '../components/form'
import { Box, Card, GridView, Section } from '../components/layout'

const Home: NextPage = () => {

  const [cars, setCars] = useState([])
  const [search, setSearch] = useState('')

  const carsFiltred = cars.filter(car => car.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    All().then(({ data }) => setCars(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Head>
        <title>DevCar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
          <Search 
            placeholder="Buscar"
            onChange={(e) => setSearch(e.target.value)} />
          <GridView>
          {carsFiltred.map((car: any) => {
              return (
                <Card key="car">
                  <Image src={car.photo} alt="car" width={300} height={300} />
                  <h1>{car.name}</h1>
                  <p>
                    {car.brand} - {car.model}
                  </p>
                  <h3>{car.description}</h3>
                  <strong>
                    {car.price}
                  </strong>
                </Card>
              )
            })}
          </GridView>
      </Section>
    </>
  )
}

export default Home


