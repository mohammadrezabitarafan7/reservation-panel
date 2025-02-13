'use client'
import { useForm } from 'react-hook-form'
import ServiceTable from '../../components/service-table'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@heroui/react'
import axios from 'axios'

const Services = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    try {
    } catch (error) {
    } finally {
      onClose()
    }
  }

  return (
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex flex-row justify-between bg-[#24303c] shadow-md rounded-md p-8 max-md:flex-col-reverse max-md:gap-5'>
        <Button
          variant='flat'
          color='default'
          radius='sm'
          size='sm'
          className='my-auto text-white bg-myOrange px-6 max-md:w-1/3'
          onPress={onOpen}
        >
          افزودن
        </Button>
        <div className='flex flex-col gap-3'>
          <h1 className='text-end text-myOrange font-semibold text-md'>
            لیست خدمات
          </h1>
          <h1 className='text-white text-sm text-end'>
            در این قسمت میتوانید انواع خدماتی که ارائه میدهید را مدیریت کنید
          </h1>
        </div>
      </div>
      <ServiceTable />
      <Modal
        placement='center'
        className='m-4'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col text-center text-medium gap-1'>
                نوع خدمات خود را وارد کنید
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='flex flex-1 flex-col gap-3 justify-evenly'
                >
                  <input
                    type='text'
                    className='border-1 text-base  outline-none text-end p-2 rounded-md '
                    placeholder='عنوان'
                    {...register('title', { required: true })}
                    aria-invalid={errors.title ? 'true' : 'false'}
                  />
                  {errors.title?.type === 'required' && (
                    <p
                      className='text-myOrange text-tiny text-end'
                      role='alert'
                    >
                      لطفا عنوان خود را وارد کنید
                    </p>
                  )}
                  <input
                    type='text'
                    inputMode='numeric'
                    className='border-1 text-base outline-none p-2 text-end rounded-md text-[12px]'
                    placeholder='زمان انجام کار'
                    {...register('time', { required: true })}
                    aria-invalid={errors.time ? 'true' : 'false'}
                  />
                  {errors.time?.type === 'required' && (
                    <p
                      className='text-myOrange text-tiny text-end'
                      role='alert'
                    >
                      لطفا زمان را وارد کنید
                    </p>
                  )}
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  radius='sm'
                  className='text-black'
                  variant='light'
                  onPress={onClose}
                >
                  انصراف
                </Button>
                <Button
                  radius='sm'
                  className='border bg-myOrange text-white'
                  onPress={handleSubmit(onSubmit)}
                >
                  تایید
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Services
