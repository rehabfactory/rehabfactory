import json
import os

target_files = [
    "src/pages/ManualTherapy.jsx",
    "src/pages/IndividualisedExerciseTherapy.jsx",
    "src/pages/ReturnToWorkAndSport.jsx",
    "src/pages/Education.jsx"
]

files_data = {}

# We will scan the transcript to find the exact view_file or file contents for these files
# OR we can just find the earliest multi_replace_file_content for each file and revert it.
log_path = "/Users/admin/.gemini/antigravity-ide/brain/aeb03d4b-9537-4524-aade-115651ff231e/.system_generated/logs/transcript_full.jsonl"
with open(log_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
        except:
            continue
        
        # We can extract the file contents if they were created or read
        if data.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in data:
            for tc in data['tool_calls']:
                if tc['name'] == 'multi_replace_file_content':
                    args = tc.get('arguments', {})
                    if isinstance(args, str):
                        try:
                            args = json.loads(args)
                        except:
                            continue
                    
                    target = args.get('TargetFile', '')
                    if any(target.endswith(tf) for tf in target_files):
                        # we can apply the inverse of the chunks!
                        pass
