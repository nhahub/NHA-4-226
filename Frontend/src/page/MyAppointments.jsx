import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';

const MyAppointments = () => {
  const { appointments } = useContext(AppContext)

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto rounded-3xl bg-white shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-6 sm:px-8 sm:py-8 border-b border-slate-200">
          <h1 className="text-2xl font-semibold text-slate-900">My appointments</h1>
          <p className="mt-2 text-sm text-slate-500">Review your upcoming consultations and complete payment for confirmed visits.</p>
        </div>

        {appointments.length === 0 ? (
          <div className="px-6 py-10 text-center text-slate-500">No appointments booked yet. Book a consultation to see it here.</div>
        ) : (
          <div className="divide-y divide-slate-200">
            {appointments.map((appointment) => (
              <article key={appointment.id} className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 last:border-0">
                <div className="flex gap-4 sm:flex-1">
                  <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-3xl bg-indigo-50">
                    <img src={appointment.doctor.image} alt={appointment.doctor.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-col justify-between gap-2 text-slate-900">
                    <div>
                      <h2 className="text-lg font-semibold">{appointment.doctor.name}</h2>
                      <p className="text-sm text-slate-500">{appointment.doctor.speciality}</p>
                    </div>

                    <div className="space-y-1 text-sm text-slate-700">
                      <p className="font-medium text-slate-900">Address:</p>
                      <p>{appointment.doctor.address.line1}</p>
                      <p>{appointment.doctor.address.line2}</p>
                      <p className="pt-2 text-slate-500">Date & Time: {appointment.date} | {appointment.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 sm:items-end sm:justify-end">
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                    Pay Online
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                    Cancel appointment
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default MyAppointments