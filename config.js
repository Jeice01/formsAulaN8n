// Configuração do webhook
const WEBHOOK_CONFIG = {
    url: 'https://n8n-workspaces-jeice-n8n.0ordg9.easypanel.host/webhook/pagina-site'
};

// Função para enviar dados via webhook
async function sendWebhook(data) {
    try {
        const response = await fetch(WEBHOOK_CONFIG.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                timestamp: new Date().toISOString(),
                formData: data,
                source: 'formulario-aula-n8n'
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao enviar webhook:', error);
        throw error;
    }
}