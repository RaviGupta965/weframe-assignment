'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Controller() {

  return (
    <div className='flex flex-col m-3 border-1 rounded-xl'>

      <div className="border-b p-3 mb-4">
        {/* Title and Subtitle */}
        <div className="flex flex-col gap-1 mb-3">
          <h2 className="text-lg font-bold">My Uploads</h2>
          <span className="text-sm text-muted-foreground">
            Documents that are uploaded by you.
          </span>
        </div>
        <div className='seperator'></div>

        {/* Toolbar row */}
        <div className="flex items-center justify-between gap-3">
          <Input placeholder="Search here.." className="max-w-xs" />

          <Button variant="outline" size="sm">
            Filters
          </Button>
        </div>
      </div>




      <Table>
        <TableCaption>Your uploaded documents.</TableCaption>
        <TableHeader>
          <TableRow className='px-0 bg-[rgba(249,250,251,1)] border border-[rgba(234,236,240,1)]'>
            <TableHead>Document Name</TableHead>
            <TableHead>Document Type</TableHead>
            <TableHead>AI App Inclusion</TableHead>
            <TableHead>Dashboard Inclusion</TableHead>
            <TableHead>Stage Access</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell> <div className="flex items-center gap-3">
              <Checkbox className="shrink-0" />
              <div className="rounded-lg p-1 flex items-center">
                <Image
                  src="/File type icon.png"
                  width={32}
                  height={32}
                  alt="pdf"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col ml-2">
                <span className="font-medium text-sm">Tech requirements.pdf</span>
                <span className="text-xs text-muted-foreground">200 KB</span>
              </div>
            </div></TableCell>
            <TableCell>
              <span className="py-.5 px-2 border font-[500] text-[12px] leading-4.5 rounded-full text-[rgba(6,118,71,1)] border-[rgba(171,239,198,1)] bg-[rgba(236,253,243,1)]">Vendors & assets</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Full</SelectItem>
                  <SelectItem value="dark">Onboarding</SelectItem>
                  <SelectItem value="system">Franchisee</SelectItem>
                  <SelectItem value="system">Prospect</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <button className="m-2 font-semibold text-[rgba(71,84,103,1)]">Delete</button>
              <button className="font-semibold text-[rgba(39,157,212,1)]">Edit</button>
            </TableCell>
          </TableRow>


          <TableRow>
            <TableCell> <div className="flex items-center gap-3">
              <Checkbox className="shrink-0" />
              <div className="rounded-lg p-1 flex items-center">
                <Image
                  src="/Doc_icon.png"
                  width={32}
                  height={32}
                  alt="pdf"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col ml-2">
                <span className="font-medium text-sm">Dashboard Screenshot.jpg</span>
                <span className="text-xs text-muted-foreground">200 KB</span>
              </div>
            </div></TableCell>
            <TableCell>
              <span className="py-.5 px-2 border font-[500] text-[12px] leading-4.5 rounded-full text-[rgba(23,92,211,1)] border-[rgba(178,221,255,1)] bg-[rgba(239,248,255,1)]">Legal</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Full</SelectItem>
                  <SelectItem value="dark">Onboarding</SelectItem>
                  <SelectItem value="system">Franchisee</SelectItem>
                  <SelectItem value="system">Prospect</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <button className="m-2 font-semibold text-[rgba(71,84,103,1)]">Delete</button>
              <button className="font-semibold text-[rgba(39,157,212,1)]">Edit</button>
            </TableCell>
          </TableRow>



          <TableRow>
            <TableCell> <div className="flex items-center gap-3">
              <Checkbox className="shrink-0" />
              <div className="rounded-lg p-1 flex items-center">
                <Image
                  src="/File type icon.png"
                  width={32}
                  height={32}
                  alt="pdf"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col ml-2">
                <span className="font-medium text-sm">Tech requirements.pdf</span>
                <span className="text-xs text-muted-foreground">200 KB</span>
              </div>
            </div></TableCell>
            <TableCell>
              <span className="py-.5 px-2 border font-[500] text-[12px] leading-4.5 rounded-full text-[rgba(185,56,21,1)] border-[rgba(249,219,175,1)] bg-[rgba(254,246,238,1)]">Technology</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Full</SelectItem>
                  <SelectItem value="dark">Onboarding</SelectItem>
                  <SelectItem value="system">Franchisee</SelectItem>
                  <SelectItem value="system">Prospect</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <button className="m-2 font-semibold text-[rgba(71,84,103,1)]">Delete</button>
              <button className="font-semibold text-[rgba(39,157,212,1)]">Edit</button>
            </TableCell>
          </TableRow>




          <TableRow>
            <TableCell> <div className="flex items-center gap-3">
              <Checkbox className="shrink-0" />
              <div className="rounded-lg p-1 flex items-center">
                <Image
                  src="/Doc_icon.png"
                  width={32}
                  height={32}
                  alt="pdf"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col ml-2">
                <span className="font-medium text-sm">Technical overview.doc</span>
                <span className="text-xs text-muted-foreground">200 KB</span>
              </div>
            </div></TableCell>
            <TableCell>
              <span className="py-.5 px-2 border font-[500] text-[12px] leading-4.5 rounded-full text-[rgba(193,21,116,1)] border-[rgba(252,206,238,1)] bg-[rgba(253,242,250,1)]">Technology</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Full</SelectItem>
                  <SelectItem value="dark">Onboarding</SelectItem>
                  <SelectItem value="system">Franchisee</SelectItem>
                  <SelectItem value="system">Prospect</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <button className="m-2 font-semibold text-[rgba(71,84,103,1)]">Delete</button>
              <button className="font-semibold text-[rgba(39,157,212,1)]">Edit</button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell> <div className="flex items-center gap-3">
              <Checkbox className="shrink-0" />
              <div className="rounded-lg p-1 flex items-center">
                <Image
                  src="/File type icon.png"
                  width={32}
                  height={32}
                  alt="pdf"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col ml-2">
                <span className="font-medium text-sm">Tech requirements.pdf</span>
                <span className="text-xs text-muted-foreground">200 KB</span>
              </div>
            </div></TableCell>
            <TableCell>
              <span className="py-.5 px-2 border font-[500] text-[12px] leading-4.5 rounded-full text-[rgba(193,21,116,1)] border-[rgba(252,206,238,1)] bg-[rgba(253,242,250,1)]">Technology</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Full</SelectItem>
                  <SelectItem value="dark">Onboarding</SelectItem>
                  <SelectItem value="system">Franchisee</SelectItem>
                  <SelectItem value="system">Prospect</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell className=''>
              <button className="m-2 font-semibold text-[rgba(71,84,103,1)]">Delete</button>
              <button className="font-semibold text-[rgba(39,157,212,1)]">Edit</button>
            </TableCell>
          </TableRow>
          {/* Add more TableRow components as needed for extra documents */}
        </TableBody>
      </Table>
    </div>
  )
}

export default Controller;
