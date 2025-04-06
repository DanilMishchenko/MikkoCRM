import { UserPlus, Phone, Mail, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Toolbar from '@/components/layout/Toollbaar';
import Link from 'next/link';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john_d@gmail.com',
    phone: '+380 99 999 99 99',
    role: 'Admin',
    status: 'Активний',
    joined: '2021-09-01',
    photo: 'https://untitledui.com/images/avatars/transparent/loki-bright',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane_d@gmail.com',
    phone: '+380 99 999 99 99',
    role: 'dizayner',
    status: 'Неактивний',
    joined: '2021-09-01',
  },
  {
    id: 3,
    name: 'Linda Loman ',
    email: 'linda_loman@gmail.com',
    phone: '+380 99 999 99 99',
    role: 'Manager',
    status: 'Неактивний',
    joined: '2021-09-01',
  },
  {
    id: 4,
    name: 'Sara Doe',
    email: 'sara_doe@gmail.com',
    phone: '+380 99 999 99 99',
    role: 'Storekeeper',
    status: 'Активний',
    joined: '2021-09-01',
  },
  {
    id: 5,
    name: 'Jane Doe',
    email: 'jane_d@gmail.com',
    phone: '+380 99 999 99 99',
    role: 'Designer',
    status: 'Новий',
    joined: '2021-09-01',
  },
  {
    id: 6,
    name: 'Linda Loman ',
    email: 'linda_loman@gmail.com',
    phone: '+380 99 999 99 99',
    role: 'Manager',
    status: 'Новий',
    joined: '2021-09-01',
  },
  {
    id: 7,
    name: 'Sara Doe',
    email: 'sara_doe@gmail.com',
    phone: '+380 99 999 99 99',
    role: 'Storekeeper',
    status: 'Активний',
    joined: '2021-09-01',
  },
];
export default function Users() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Співробітники</h1>
        <button className="flex bg-action text-white px-4 py-2 rounded-md items-center cursor-pointer shadow-md">
          <UserPlus size={20} />
          <span className="ml-2">Створити нового </span>
        </button>
      </div>
      <Toolbar />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-6">
        {users.map(user => (
          <li
            key={user.id}
            className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* <a href="#" className="p-6 flex flex-col items-center text-center space-y-3"> */}
            <p className="inline-block bg-success text-white text-xs font-medium px-4 py-1 rounded-full">
              {user.status}
            </p>
            <div className="flex flex-col items-center mt-8">
              <div className="w-26 h-26  bg-alert rounded-full overflow-hidden shadow-md">
                <Image
                  src={
                    user.photo ||
                    'https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png'
                  }
                  alt="user"
                  width={104}
                  height={104}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-3 text-lg font-semibold text-primary">{user.name}</p>
              <p className="mt-1 text-sm font-medium text-gray-medium">{user.role}</p>
            </div>
            <ul className="mt-4 p-4 bg-secondary rounded-md">
              <li>
                <a
                  href={`mailto:${user.email}`}
                  className="flex items-center text-xs text-gray-500 font-semibold"
                >
                  <Mail className="mr-2" size={16} />
                  <span className="px-3 py-1 bg-white rounded-full border-1 border-gray-medium text-xs text-info">
                    {user.email}
                  </span>
                </a>
              </li>
              <li className="mt-2">
                <a
                  href={`tel:${user.phone}`}
                  className="flex items-center text-xs text-gray-500 font-semibold"
                >
                  <Phone className="mr-2" size={16} />
                  <span className="px-3 py-1 bg-white rounded-full border-1 border-gray-medium text-info">
                    {user.phone}
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs 2xl:text-sm text-gray-400">Приєднався: {user.joined}</p>
              <Link href={`/employees/${user.id}`} className="flex items-center">
                <span className="text-xs 2xl:text-sm">Детальніше</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
