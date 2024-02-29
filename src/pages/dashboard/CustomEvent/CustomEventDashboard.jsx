import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const CustomEventDashboard = () => {

    const axios = useAxiosPublic()

    const { data: customEvent = [], refetch } = useQuery({
        queryKey: ['customEvent'],
        queryFn: async () => {
            const res = await axios.get('/custom-event')
            return res.data;
        }
    })
    const handleApprove = async (id) => {

        const update = await axios.patch(`/custom-event/${id}`)
        console.log(update);
        // if (update.status.modifiedCount > 0) {            
        //     refetch()
        // }

    }
    const handleReject = async (id) => {

        const update = await axios.put(`/custom-event/${id}`)
        console.log(update);
        if (update.status.modifiedCount > 0) {
            refetch()
        }

    }

    return (
        <div>
            <div className="flex justify-between items-center">

            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold ">
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">EventType</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Location</th>
                            <th className="px-4 py-2">Guests</th>
                            <th className="px-4 py-2">Photography</th>
                            <th className="px-4 py-2">Catering</th>
                            <th className="px-4 py-2">Special Request</th>
                            <th className="px-4 py-2">Cost</th>
                            <th className="px-4 py-2">Approve</th>
                            <th className="px-4 py-2">Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customEvent.map((event, index) => (
                                <tr key={event._id} className='text-center'>
                                    <td className="px-4 py-2 border-2 border-gray-300">{index + 1}</td>

                                    <td className="px-4 text-nowrap py-2 border-2 border-gray-300">{event?.firstName + ' ' + event?.lastName}</td>
                                    <td className="px-4 py-2 border-2 border-gray-300">{event?.email}</td>
                                    <td className="px-4 py-2 border-2 border-gray-300">{event?.phone}</td>
                                    <td className="px-4 py-2 text-nowrap border-2 border-gray-300">{event?.eventType}</td>
                                    <td className="px-4 text-nowrap py-2 border-2 border-gray-300">{event?.date}</td>
                                    <td className="px-4 py-2 border-2 border-gray-300">{event?.location}</td>
                                    <td className="px-4 py-2 border-2 border-gray-300">{event?.guests}</td>
                                    <td className="px-4 py-2 text-nowrap border-2 border-gray-300">{event?.photography}</td>
                                    <td className="px-4 py-2 border-2 border-gray-300">{event?.catering}</td>
                                    <td className="px-4 py-2 text-nowrap border-2 border-gray-300">{event?.request}</td>
                                    <td className="px-2 py-2 border-2 border-gray-300">{event?.cost ? '$' + ' ' + event?.cost : ''}</td>
                                    <td className="px-4 py-2">
                                        {
                                            event.status == 'rejected' ? <p
                                                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  opacity-70">Approve</p> : (event.status == 'pending' ? <button
                                                    onClick={() => handleApprove(event._id)}
                                                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50">Approve</button> : <p className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50'>Approved</p>)
                                        }

                                        {/* TODO */}

                                    </td>
                                    <td className="px-4 py-2 ">
                                        {event.status == 'rejected' ? <p
                                            className="text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  disabled:opacity-50 ">Rejected</p> : <button
                                                onClick={() => handleReject(event._id)}
                                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50">Reject</button>}

                                        {/* TODO */}

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomEventDashboard;