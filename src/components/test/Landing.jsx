import React from "react"

function Landing() {
  const [code, setCode] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [language, setLanguage] = React.useState("en")
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [reservation, setReservation] = React.useState(null)

  const checkReservation = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setReservation(null)

    try {
      const formData = new FormData()
      formData.append("code", code)
      formData.append("email", email)
      formData.append("language", language)

      const response = await fetch("https://api.sacbetransfers.com/api/v1/reservation/get", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setReservation(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido al verificar la reservación")
    } finally {
      setLoading(false)
    }
  }

  const isConfirmed = reservation?.status === "CONFIRMED"
  const isFlexible = reservation?.config?.is_flexible === 1
  const isNotCancelled = reservation?.config?.is_cancelled === 0

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-6">
          <h1 className="text-2xl font-bold text-white">Verificador de Reservaciones</h1>
        </div>

        <form onSubmit={checkReservation} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Código de Reservación
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ej: CUN-CA-6260"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ej: support@sacbetransfers.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
              Idioma
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50"
          >
            {loading ? "Verificando..." : "Verificar Reservación"}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {reservation && (
          <div className="p-6 border-t border-gray-200 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Resultado de la Verificación</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-500">Estado:</span>
                  <span className="font-semibold">{reservation.status}</span>
                  <span className={isConfirmed ? "text-green-500" : "text-red-500"}>
                    {isConfirmed ? "✓" : "✗"}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-500">Tarifa Flexible:</span>
                  <span className={isFlexible ? "text-green-500" : "text-red-500"}>
                    {isFlexible ? "✓" : "✗"}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-500">No Cancelada:</span>
                  <span className={isNotCancelled ? "text-green-500" : "text-red-500"}>
                    {isNotCancelled ? "✓" : "✗"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Validación:</h3>
              {isConfirmed && isFlexible && isNotCancelled ? (
                <div className="text-green-600">
                  La reservación es válida y cumple con todos los requisitos
                </div>
              ) : (
                <div className="text-red-600">
                  La reservación no cumple con todos los requisitos
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium text-gray-700 mb-2">Detalles del Cliente:</h3>
                <p>
                  <span className="font-medium">Nombre:</span> {reservation.client?.first_name}{" "}
                  {reservation.client?.last_name}
                </p>
                <p>
                  <span className="font-medium">Teléfono:</span> {reservation.client?.phone}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {reservation.client?.email}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium text-gray-700 mb-2">Servicios:</h3>
                <ul className="space-y-2">
                  {reservation.items?.map((item, index) => (
                    <li key={index} className="bg-gray-50 p-2 rounded">
                      <p>
                        <span className="font-medium">Código:</span> {item.code}
                      </p>
                      <p>
                        <span className="font-medium">Tipo:</span> {item.service_type_name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium text-gray-700 mb-2">Proveedor:</h3>
                <p>
                  <span className="font-medium">Nombre:</span> {reservation.provider?.name}
                </p>
                <p>
                  <span className="font-medium">Destino:</span> {reservation.provider?.destination}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Landing;