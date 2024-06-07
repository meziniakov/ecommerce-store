import { Dialog, Transition, TransitionChild } from "@headlessui/react"
import React, { Fragment } from "react"

interface ModalProps {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children
}) => {
    return (<Transition show={open} appear as={Fragment}>
        <Dialog as="div" className='relative z-10' onClose={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-50">

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center fustify-center p-4 text-center">

                        <TransitionChild 
                            as={Fragment}
                            enter="aese-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </Transition>)
}