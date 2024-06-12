import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="bg-white rounded-md mr-6">
          <>
            <Disclosure.Button className="py-4 flex items-center gap-3 bg-white  px-4 rounded-md ">
              {open ? <BiChevronUp /> : <BiChevronDown />}
              <span className={open ? "text-red-600" : "text-gray-700 text-sm"}>
                {props.title}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              <div className='flex items-center gap-3 flex-wrap'>
                {props.tags.map((tag, index) => (
                  <div key={index} className='border-2 border-gray-200 p-1 px-8'>
                    <span className='text-red-600'>{tag}</span>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        </div>
      )}
    </Disclosure>
  );
}

export default PlaysFilter;
