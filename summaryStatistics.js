// WIP

function getSummaryStatisticData(record) {   
        return {
            'NMS-TOTAL': record['NMS-TOTAL'],
            'PDSS-TOTAL': record['PDSS-TOTAL'],
            'PDQ8-TOTAL': record['PDQ8-TOTAL'],
            'PDQ8-PDQSI': record['PDQ8-PDQSI'],
            'Anxiety': record['Anxiety'],
            'Depression': record['Depression'],
            'BKS': record['BKS'],
            'DKS': record['DKS'],
            'FDS': record['FDS'],
            'PTI': record['PTI'],
            'PTT': record['PTT'],
            'PDQ39-PDQSI': record['PDQ39-PDQSI'],
            'PDQ39-Mob': record['PDQ39-Mob'],
            'PDQ39-ADL': record['PDQ39-ADL'],
            'PDQ39-Emot': record['PDQ39-Emot'],
            'PDQ39-Stigma': record['PDQ39-Stigma'],
            'PDQ39-Soc-Sup': record['PDQ39-Soc-Sup'],
            'PDQ39-Cog': record['PDQ39-Cog'],
            'PDQ39-Comm': record['PDQ39-Comm'],
            'PDQ39-Discom': record['PDQ39-Discom'],
            'UPDRS-TOTAL': record['UPDRS-TOTAL'],
            'PDQC-PDQSI': record['PDQC-PDQSI'],
            'PDQC-social/personal-activities': record['PDQC-social/personal-activities'],
            'PDQC-anx/dep': record['PDQC-anx/dep'],
            'PDQC-Self-care': record['PDQC-Self-care'],
            'PDQC-Stress': record['PDQC-Stress']
        }  
}

module.exports = {getSummaryStatisticData};