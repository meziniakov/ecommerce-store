'use client'
import { Plus, X } from "lucide-react"
import Button from "./ui/Button"
import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import IconButton from "./ui/icon-button"
import Filter from "./Filter"

const MobileFilters = ({
    colors
}) => {
    const [open, setOpen] = useState(false)
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
        <>
        <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
            Фильтры
            <Plus size={20}/>
        </Button>
        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-25"/>

            <div className="fixed inset-0 z-40 flex">
                <DialogPanel className="relative ml-auto flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                    <div className="flex items-center justify-end px-4">
                        <IconButton icon={<X/>} onClick={onClose}/>
                    </div>
                    <div className="p-4">
                        <Filter data={colors} name="Цвет" valueKey="colorId"/>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
        </>
    )
}
export default MobileFilters