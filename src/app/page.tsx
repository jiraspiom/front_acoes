'use client'
import { Button } from '@/components/ui/button'
import { DialogHeader } from '@/components/ui/dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import axios from 'axios'
import Nova from './nova/page'

export default function Home() {
  const dados = axios.get('')
  return (
    <div>
      INICIO
      <Dialog>
        <DialogTrigger asChild>
          <Button>Abrir</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo Lancamento</DialogTitle>
            <DialogDescription>criar nova lancamento</DialogDescription>
            <Nova></Nova>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      FIM
    </div>
  )
}
