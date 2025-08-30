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

function Controller() {
  const [checked, setChecked] = useState(true);
  const [unchecked, setunchecked] = useState(false);
  return (
    <div className='flex flex-col p-9'>

      <div className="border-b pb-4 mb-4">
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
          <TableRow>
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
              <span className="badge badge-legal">Legal</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <select>
                <option>Full</option>
                <option>Onboarding</option>
                <option>Franchisee</option>
                <option>Prospect</option>
              </select>
            </TableCell>
            <TableCell>
              <button className="btn-delete">Delete</button>
              <button className="btn-edit">Edit</button>
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
              <span className="badge badge-legal">Legal</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <select>
                <option>Full</option>
                <option>Onboarding</option>
                <option>Franchisee</option>
                <option>Prospect</option>
              </select>
            </TableCell>
            <TableCell>
              <button className="btn-delete">Delete</button>
              <button className="btn-edit">Edit</button>
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
              <span className="badge badge-legal">Legal</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <select>
                <option>Full</option>
                <option>Onboarding</option>
                <option>Franchisee</option>
                <option>Prospect</option>
              </select>
            </TableCell>
            <TableCell>
              <button className="btn-delete">Delete</button>
              <button className="btn-edit">Edit</button>
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
              <span className="badge badge-legal">Legal</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <select>
                <option>Full</option>
                <option>Onboarding</option>
                <option>Franchisee</option>
                <option>Prospect</option>
              </select>
            </TableCell>
            <TableCell>
              <button className="btn-delete">Delete</button>
              <button className="btn-edit">Edit</button>
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
              <span className="badge badge-legal">Legal</span>
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" defaultChecked={false} />
            </TableCell>
            <TableCell>
              <select>
                <option>Full</option>
                <option>Onboarding</option>
                <option>Franchisee</option>
                <option>Prospect</option>
              </select>
            </TableCell>
            <TableCell>
              <button className="btn-delete">Delete</button>
              <button className="btn-edit">Edit</button>
            </TableCell>
          </TableRow>
          {/* Add more TableRow components as needed for extra documents */}
        </TableBody>
      </Table>
    </div>
  )
}

export default Controller;
