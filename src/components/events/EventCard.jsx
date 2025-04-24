import React from "react";


function EventCard({
  cardType,
  eventType,
  eventOrigin,
  title,
  titleLargeEvent,
  titleActivity,
  type,
  user,
  capacity,
  capacityLargeEvent,
  format,
  startHours,
  endHours,
  startDay,
  startMounth,
  endDay,
  endMounth,
  button
}) {

  if (cardType === "SHORT") {
    return (
      <>


        {eventType === "SIMPLE" ? (
          <div className="flex flex-col items-center justify-center h-screen">
            {/* Primeira div */}
            <div className="h-[15.875rem] w-[33rem] bg-FI_neutral_30 border border-b-0 border-FI_neutral_30 rounded-t-lg rounded-b-none p-0 flex flex-col justify-between">
              <div className="relative flex flex-col items-start justify-start h-full">
                <div className="absolute bottom-0 w-[6.875rem] h-auto bg-FI_yellowDark p-2 border border-b-0 border-FI_yellowDark rounded-tr-lg flex items-center justify-center">
                  <p className="text-lg font-montserrat text-FI_neutral_0">{format}</p>
                </div>
              </div>
            </div>

            {/* Segunda div */}
            <div className="relative h-[12.9375rem] w-[33rem] bg-FI_neutral_0 border border-t-0 border-FI_neutral_30 rounded-b-lg rounded-t-none p-4 flex justify-between items-center gap-3">
              {/* Texto e informações */}
              <div className="flex flex-col items-start justify-start h-full">
                <h2 className="text-3xl font-bold font-montserrat text-FI_green_dark mb-4">{title}</h2>
                <div className="space-y-2">
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{user}</p>
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{capacity}</p>
                </div>
              </div>

              <div className="absolute w-[8.375rem] h-[7.0625rem] border border-FI_green rounded-lg p-4 flex flex-col justify-between items-center gap-2 bottom-0 right-0 m-4">
                <div className="flex justify-between items-center m-auto gap-2">
                  <div className="w-fit h-8 font-montserrat text-2xl text-FI_neutral">{startDay}</div>
                  <div className="w-fit h-8 font-montserrat text-2xl text-FI_green_dark">{startMounth}</div>
                </div>
                <div className="w-[5rem] h-[0.30rem] bg-FI_neutral_60 border rounded-sm"></div>
                <div className="flex justify-between items-center">
                  <div className="text-base">{startHours}-</div>
                  <div className="text-base">{endHours}</div>
                </div>
              </div>
            </div>
          </div>
        ) : eventType === "LARGE" ? (
          <div className="flex flex-col items-center justify-center h-screen">
            {/* Primeira div */}
            <div className="h-[15.875rem] w-[33rem] bg-FI_neutral_30 border border-b-0 border-FI_neutral_30 rounded-t-lg rounded-b-none p-0 flex flex-col justify-between"></div>

            {/* Segunda div */}
            <div className="relative h-[12.9375rem] w-[33rem] bg-FI_neutral_0 border border-t-0 border-FI_neutral_30 rounded-b-lg rounded-t-none p-4 flex justify-between items-center gap-3">
              {/* Texto e informações */}
              <div className="flex flex-col items-start justify-start h-full">
                <h2 className="text-3xl font-bold font-montserrat text-FI_green_dark mb-4">{titleLargeEvent}</h2>
                <div className="space-y-2">
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{user}</p>
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{capacityLargeEvent}</p>
                </div>
              </div>

              <div className="absolute w-[8.375rem] h-[7.0625rem] border border-FI_green rounded-lg p-4 flex flex-col justify-between items-center gap-2 bottom-0 right-0 m-4">
                <div className="flex justify-between items-center m-auto gap-2">
                  <div className="w-fit h-8 font-montserrat text-xl text-FI_neutral">{startDay}</div>
                  <div className="w-fit h-8 font-montserrat text-xl text-FI_green_dark">{startMounth}</div>
                </div>
                <div className="w-20 h-2 bg-FI_neutral_60 border rounded-sm"></div>
                <div className="flex justify-between items-center gap-2">
                  <div className="w-fit h-8 font-montserrat text-xl text-FI_neutral">{endDay}</div>
                  <div className="w-fit h-8 font-montserrat text-xl text-FI_green_dark">{endMounth}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            {/* Primeira div */}
            <div className="h-[15.875rem] w-[33rem] bg-FI_neutral_30 border border-b-0 border-FI_neutral_30 rounded-t-lg rounded-b-none p-0 flex flex-col justify-between">
              <div className="relative flex flex-col items-start justify-start h-full">
                <div className="absolute bottom-0 w-[6.875rem] h-auto bg-FI_yellowDark p-2 border border-b-0 border-FI_yellowDark rounded-tr-lg flex items-center justify-center">
                  <p className="text-lg font-montserrat text-FI_neutral_0">{format}</p>
                </div>
              </div>
            </div>

            {/* Segunda div */}
            <div className="relative h-[12.9375rem] w-[33rem] bg-FI_neutral_0 border border-t-0 border-FI_neutral_30 rounded-b-lg rounded-t-none p-4 flex justify-between items-center gap-3">
              {/* Texto e informações */}
              <div className="flex flex-col items-start justify-start h-full">
                <h2 className="text-3xl font-bold font-montserrat text-FI_green_dark mb-0">{titleActivity}</h2>
                <p className="text-base font-bold font-montserrat text-FI_green mb-4">{eventOrigin}</p>
                <div className="space-y-2">
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{user}</p>
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{capacity}</p>
                </div>
              </div>

              <div className="absolute w-[8.375rem] h-[7.0625rem] border border-FI_green rounded-lg p-4 flex flex-col justify-between items-center gap-2 bottom-0 right-0 m-4">
                <div className="flex justify-between items-center m-auto gap-2">
                  <div className="w-fit h-8 font-montserrat text-2xl text-FI_neutral">{startDay}</div>
                  <div className="w-fit h-8 font-montserrat text-2xl text-FI_green_dark">{startMounth}</div>
                </div>
                <div className="w-[5rem] h-[0.30rem] bg-FI_neutral_60 border rounded-sm"></div>
                <div className="flex justify-between items-center">
                  <div className="text-base">{startHours}-</div>
                  <div className="text-base">{endHours}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else if (cardType === "LARGE") {
    return (

      <>


        {eventType === "SIMPLE" ? (
          <div className="flex flex-col items-center justify-center h-screen">
            {/* Primeira div */}
            <div className="w-[50.79rem] h-[18.25rem]  bg-FI_neutral_30 border border-b-0 border-FI_neutral_30 rounded-t-lg rounded-b-none p-0 flex flex-col justify-between">
              <div className="relative flex flex-col items-start justify-start h-full">
                <div className="absolute bottom-0 w-[6.875rem] h-auto bg-FI_yellowDark p-2 border border-b-0 border-FI_yellowDark rounded-tr-lg flex items-center justify-center">
                  <p className="text-lg font-montserrat text-FI_neutral_0">{format}</p>
                </div>
              </div>
            </div>

            {/* Segunda div */}
            <div className=" w-[50.79rem] h-[16.875rem]  bg-FI_neutral_0 border border-t-0 border-FI_neutral_30 rounded-b-lg rounded-t-none p-8 flex justify-between items-center gap-3">
              {/* Texto e informações */}
              <div className="w-[70%] flex flex-col items-start justify-start h-full">
                <h2 className="text-3xl font-bold font-montserrat text-FI_green_dark mb-2">{title}</h2>
                <div className="space-y-1">
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{user}</p>
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{type}</p>
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{capacity}</p>
                </div>
              </div>

              <div className="flex w-[30%] items-center justify-between ">



                <div className=" w-1 h-32 bg-FI_green rounded-full "></div>

                <div className="flex flex-col gap-4">

                  <div className=" w-43 h-28 border border-FI_green rounded-lg p-4 flex flex-col justify-between items-center gap-2 bottom-0 right-0 m-0">

                    <div className="flex justify-between items-center m-auto gap-2">
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_neutral">{startDay}</div>
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_green_dark">{startMounth}</div>
                    </div>
                    <div className="w-[5rem] h-[0.30rem] bg-FI_neutral_60 border rounded-sm"></div>
                    <div className="flex justify-between items-center">
                      <div className="text-base">{startHours}-</div>
                      <div className="text-base">{endHours}</div>
                    </div>

                  </div>

                  <div class="w-43 h-15 border rounded-lg bg-FI_green p-6 font-montserrat text-FI_neutral_0 font-bold">{button} <span style={{ fontSize: '1.3rem' }}>&#8594;</span></div>

                </div>
              </div>
            </div>
          </div>
        ) : eventType === "LARGE" ? (
          <div className="flex flex-col items-center justify-center h-screen">
            {/* Primeira div */}
            <div className="w-[50.79rem] h-[18.25rem]  bg-FI_neutral_30 border border-b-0 border-FI_neutral_30 rounded-t-lg rounded-b-none p-0 flex flex-col justify-between">
              
            </div>

            {/* Segunda div */}
            <div className=" w-[50.79rem] h-[16.875rem]  bg-FI_neutral_0 border border-t-0 border-FI_neutral_30 rounded-b-lg rounded-t-none p-8 flex justify-between items-center gap-3">
              {/* Texto e informações */}
              <div className="w-[70%] flex flex-col items-start justify-start h-full">
                <h2 className="text-3xl font-bold font-montserrat text-FI_green_dark mb-2">{title}</h2>
                <div className="space-y-1">
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{user}</p>
                  
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{capacityLargeEvent}</p>
                </div>
              </div>

              <div className="flex w-[30%] items-center justify-between ">



                <div className=" w-1 h-32 bg-FI_green rounded-full "></div>

                <div className="flex flex-col gap-4">

                  <div className=" w-43 h-28 border border-FI_green rounded-lg p-4 flex flex-col justify-between items-center gap-2 bottom-0 right-0 m-0">

                    <div className="flex justify-between items-center m-auto gap-2">
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_neutral">{startDay}</div>
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_green_dark">{startMounth}</div>
                    </div>
                    <div className="w-[5rem] h-[0.30rem] bg-FI_neutral_60 border rounded-sm"></div>
                    <div className="flex justify-between items-center m-auto gap-2">
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_neutra">{endDay}</div>
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_green_dark">{endMounth}</div>
                    </div>

                  </div>

                  <div class="w-43 h-15 border rounded-lg bg-FI_green p-6 font-montserrat text-FI_neutral_0 font-bold">{button} <span style={{ fontSize: '1.3rem' }}>&#8594;</span></div>

                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            {/* Primeira div */}
            <div className="w-[50.79rem] h-[18.25rem]  bg-FI_neutral_30 border border-b-0 border-FI_neutral_30 rounded-t-lg rounded-b-none p-0 flex flex-col justify-between">
              <div className="relative flex flex-col items-start justify-start h-full">
                <div className="absolute bottom-0 w-[6.875rem] h-auto bg-FI_yellowDark p-2 border border-b-0 border-FI_yellowDark rounded-tr-lg flex items-center justify-center">
                  <p className="text-lg font-montserrat text-FI_neutral_0">{format}</p>
                </div>
              </div>
            </div>

            {/* Segunda div */}
            <div className=" w-[50.79rem] h-[16.875rem]  bg-FI_neutral_0 border border-t-0 border-FI_neutral_30 rounded-b-lg rounded-t-none p-8 flex justify-between items-center gap-3">
              {/* Texto e informações */}
              <div className="w-[70%] flex flex-col items-start justify-start h-full">
                <h2 className="text-3xl font-bold font-montserrat text-FI_green_dark">{titleActivity}</h2>
                <p className="text-base font-bold font-montserrat text-FI_green mb-4">{eventOrigin}</p>
                <div className="space-y-1">
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{user}</p>
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{type}</p>
                  <p className="text-base font-medium font-montserrat text-FI_neutral_90">{capacity}</p>
                </div>
              </div>

              <div className="flex w-[30%] items-center justify-between ">



                <div className=" w-1 h-32 bg-FI_green rounded-full "></div>

                <div className="flex flex-col gap-4">

                  <div className=" w-43 h-28 border border-FI_green rounded-lg p-4 flex flex-col justify-between items-center gap-2 bottom-0 right-0 m-0">

                    <div className="flex justify-between items-center m-auto gap-2">
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_neutral">{startDay}</div>
                      <div className="w-fit h-8 font-montserrat text-2xl text-FI_green_dark">{startMounth}</div>
                    </div>
                    <div className="w-[5rem] h-[0.30rem] bg-FI_neutral_60 border rounded-sm"></div>
                    <div className="flex justify-between items-center">
                      <div className="text-base">{startHours}-</div>
                      <div className="text-base">{endHours}</div>
                    </div>

                  </div>

                  <div class="w-43 h-15 border rounded-lg bg-FI_green p-6 font-montserrat text-FI_neutral_0 font-bold">{button} <span style={{ fontSize: '1.3rem' }}>&#8594;</span></div>

                </div>
              </div>
            </div>
          </div>
        )}
      </>

    );
  }
}

export default EventCard;
