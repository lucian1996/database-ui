'use server'
import prisma from '@/util/config/prisma'
import { laptop } from '@prisma/client'

export default async function AddLaptop(newLaptop: laptop) {
  try {
    const inputData: laptop = {
      laptop_id: newLaptop.laptop_id,
      name: newLaptop.name,
      serial_number: newLaptop.serial_number,
      springboro_tag_id: newLaptop.springboro_tag_id,
      aux_funds_po_id: newLaptop.aux_funds_po_id,
      cinday_id: newLaptop.cinday_id,
      date_created: new Date(),
      date_modified: new Date(),
      flag_repair: false
    }

    await prisma.laptop.create({
      data: inputData,
    })
    console.log(`${newLaptop.name} Added to ipad database.`)
  } catch (error) {
    console.log(`${newLaptop.name} Failed to add to ipad database.`)
    console.log(error)
  }
}
