#!/bin/bash
set -e

# Update postgresql.conf to listen on all addresses
echo "Configuring PostgreSQL to listen on all addresses..."
echo "listen_addresses = '*'" >> /var/lib/postgresql/data/postgresql.conf

# Update pg_hba.conf to allow remote connections
echo "Configuring pg_hba.conf to allow remote connections..."
echo "host    all             all             0.0.0.0/0               md5" >> /var/lib/postgresql/data/pg_hba.conf
