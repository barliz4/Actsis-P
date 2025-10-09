from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import csv
import os

class MiServidor(BaseHTTPRequestHandler):

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        return super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/guardar':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            datos = json.loads(post_data.decode('utf-8'))

            archivo = 'datos.csv'
            existe = os.path.exists(archivo)

            with open(archivo, 'a', newline='', encoding='utf-8') as f:
                writer = csv.writer(f)
                if not existe:
                    writer.writerow(['Nombre', 'Correo', 'Telefono', 'Asunto', 'Mensaje'])
                writer.writerow([
                    datos['nombre'], datos['correo'], datos['telefono'],
                    datos['asunto'], datos['mensaje']
                ])

            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write("✅ Datos guardados correctamente".encode('utf-8'))

servidor = HTTPServer(('localhost', 8000), MiServidor)
print("Servidor escuchando en http://localhost:8000 ...")
servidor.serve_forever()