#!/bin/bash
rsync -av rdc@gcoos4.tamu.edu:/data/nrl_rpsea/2016*/ncom_relo_mean* /data/mdv/nrl_relo_mean/
rsync -av rdc@gcoos4.tamu.edu:/data/nrl_rpsea/2016*/ncom_relo_std* /data/mdv/nrl_relo_std/
rsync -avr rdc@gcoos4.tamu.edu:/data/ndbc_dods/dods_data /data/mdv/ndbc_dods
