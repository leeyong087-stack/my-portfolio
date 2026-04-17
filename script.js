// 로컬 Gemma 4 서버 상태를 체크하는 간단한 로직 (Tailscale IP 활용 시)
async function checkAgentStatus() {
    const statusText = document.getElementById('server-status');
    // 실제 사용 시 본인의 Tailscale IP로 변경
    const TAILSCALE_IP = "http://100.x.x.x:1234/v1/models";

    try {
        const response = await fetch(TAILSCALE_IP);
        if (response.ok) {
            statusText.innerText = "● Gemma 4 Agent Online";
            statusText.style.color = "green";
        }
    } catch (error) {
        statusText.innerText = "○ Agent Offline (로컬 서버를 확인하세요)";
        statusText.style.color = "red";
    }
}

window.onload = checkAgentStatus;
